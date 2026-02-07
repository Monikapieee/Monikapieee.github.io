import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 300,
          fontSize: "clamp(3rem, 8vw, 6rem)",
          letterSpacing: "0.1em",
          color: "var(--color-text-secondary)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "1.1rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-text-secondary)",
          marginBottom: "2rem",
        }}
      >
        Strona nie została odnaleziona
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "0.9rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          borderBottom: "1px solid var(--color-accent)",
          paddingBottom: "2px",
          transition: "opacity 0.3s ease",
        }}
      >
        Strona główna
      </Link>
    </div>
  );
}
