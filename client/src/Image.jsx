// export default function Image({ src, ...rest }) {
//   src =
//     src && src.includes("https://")
//       ? src
//       : "http://localhost:4000/uploads/" + src;
//   return <img {...rest} src={src} alt={""} />;
// }

export default function Image({ src, ...rest }) {
  if (!src) return null;

  src = src.includes("http") ? src : `http://localhost:8080/uploads/${src}`;

  return <img {...rest} src={src} alt="" />;
}
