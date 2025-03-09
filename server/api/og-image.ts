import { defineEventHandler, getQuery } from "h3";
import satori from "satori";
import sharp from "sharp";
import { readFile } from "fs/promises";
import path from "path";
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const DMSansFontPath = path.resolve("public/fonts/DMSans-Regular.ttf");
let DMSansFontData: ArrayBuffer | null = null;

export default defineEventHandler(async (event) => {
  if (!DMSansFontData) {
    const buffer = await readFile(DMSansFontPath);
    DMSansFontData = Buffer.from(buffer).buffer;
  }

  const { slug } = getQuery(event);
  if (!slug) return new Response("Missing slug", { status: 400 });

  const formattedTitle = String(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                left: 42,
                top: 42,
                position: "absolute",
                display: "flex",
                alignItems: "center",
              },
              children: [
                {
                  type: "span",
                  props: {
                    style: {
                      width: 24,
                      height: 24,
                      background: "black",
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      marginLeft: 8,
                      fontSize: 20,
                    },
                    children: "abdspace.xyz",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px 50px",
                margin: "0 42px",
                fontSize: 40,
                width: "auto",
                maxWidth: 550,
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                lineHeight: 1.4,
              },
              children: formattedTitle,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "DM Sans",
          data: DMSansFontData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  const uploadResponse = await new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      {
        resource_type: 'image',
        folder: 'og-images',
        public_id: slug as string,
        overwrite: true,
        format: 'webp',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(pngBuffer);
  });

  return { url: uploadResponse.secure_url };
});
