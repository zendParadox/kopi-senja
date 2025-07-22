export default function Home() {
  return (
    <div className="card flex sm:flex-row gap-4 size-fit p-8">
      <img
        src="https://cdn.flyonui.com/fy-assets/icons/nextjs-icon.png"
        alt="NextJS logo"
        className="size-40"
      />
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold mb-3">You did it! 🎉</h2>
        <p>
          You’ve successfully created a project with{" "}
          <a
            className="link link-animated font-semibold"
            href="https://flyonui.com/"
          >
            FlyonUI
          </a>
          +
          <a
            className="link link-animated font-semibold"
            href="https://nextjs.org/"
          >
            NextJS
          </a>
          .
        </p>
        <p className="text-base text-base-content">
          Explore our pre-built components by navigating the menu. Test them
          with various themes from the navbar, and feel free to copy and paste
          any component to see it in action!
        </p>
        <p className="mt-2">
          This example includes reusable Button and Accordion components. You
          can leverage these to build any custom component using FlyonUI,
          tailored to your specific requirements.
        </p>
      </div>
    </div>
  );
}
