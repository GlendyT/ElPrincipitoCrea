import { useEffect } from "react";

const Encuentranos = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen  text-white dark:text-black bg-gradient-to-t from-white to-white dark:from-gray-900 dark:to-black  ">
      <div className="flex items-center justify-center pt-28 px-4">
        <blockquote
          className="tiktok-embed "
          cite="https://www.tiktok.com/@creacioneselprincipito"
          data-unique-id="creacioneselprincipito"
          data-embed-type="creator"
          style={{
            maxWidth: "780px",
            minWidth: "388px",
          }}
        >
          <section className="flex text-black dark:text-white bg-white dark:bg-black">
            <a
              target="_blank"
              href="https://www.tiktok.com/@creacioneselprincipito?refer=creator_embed"
              rel="noopener noreferrer"
            >
              @creacioneselprincipito
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
};

export default Encuentranos;
