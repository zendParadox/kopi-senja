"use client";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
// import StaggeredMenu from "@/components/StaggeredMenu";

export default function Home() {
  // const menuItems = [
  //   { label: "Home", ariaLabel: "Go to home page", link: "/" },
  //   { label: "About", ariaLabel: "Learn about us", link: "/about" },
  //   { label: "Services", ariaLabel: "View our services", link: "/services" },
  //   { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  // ];

  // const socialItems = [
  //   { label: "Twitter", link: "https://twitter.com" },
  //   { label: "GitHub", link: "https://github.com" },
  //   { label: "LinkedIn", link: "https://linkedin.com" },
  // ];
  return (
    <div className="w-full">
      <div className=" flex justify-center">
        <div className="max-w-xl w-full justify-center">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="">
        <Jumbotron></Jumbotron>
      </div>
      <div className="">
        <AboutUs></AboutUs>
      </div>
      <div className="mt-2">
        <Products></Products>
      </div>
      <div className="mt-2">
        <Testimonial></Testimonial>
      </div>
      {/* <div className="">
        <div style={{ height: "100vh", background: "#1a1a1a" }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div>
      </div> */}
    </div>
    // <div className="card flex sm:flex-row gap-4 size-fit p-8">
    //   <img
    //     src="https://cdn.flyonui.com/fy-assets/icons/nextjs-icon.png"
    //     alt="NextJS logo"
    //     className="size-40"
    //   />
    //   <div className="max-w-2xl">
    //     <h2 className="text-3xl font-semibold mb-3">You did it! 🎉</h2>
    //     <p>
    //       You’ve successfully created a project with{" "}
    //       <a
    //         className="link link-animated font-semibold"
    //         href="https://flyonui.com/"
    //       >
    //         FlyonUI
    //       </a>
    //       +
    //       <a
    //         className="link link-animated font-semibold"
    //         href="https://nextjs.org/"
    //       >
    //         NextJS
    //       </a>
    //       .
    //     </p>
    //     <p className="text-base text-base-content">
    //       Explore our pre-built components by navigating the menu. Test them
    //       with various themes from the navbar, and feel free to copy and paste
    //       any component to see it in action!
    //     </p>
    //     <p className="mt-2">
    //       This example includes reusable Button and Accordion components. You
    //       can leverage these to build any custom component using FlyonUI,
    //       tailored to your specific requirements.
    //     </p>
    //   </div>
    // </div>
  );
}
