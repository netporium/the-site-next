type Variant = "home" | "about" | "services" | "contact";

export default function PageBackground({ variant }: { variant: Variant }) {
  return <div className={`background-img ${variant}`} />;
}
