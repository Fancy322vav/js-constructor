import image from "./assets/bird.jpg";
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Site constructor on vanilla JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock("Some TXT", {}),
  new ColumnsBlock(["1111", "222", "333"], {}),
  new ImageBlock(image, {}),
];
