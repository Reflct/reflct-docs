import LogoImage from "@/public/reflct-logo.svg";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <LogoImage
        className="text-foreground"
        style={{
          height: "32px",
          width: "auto",
        }}
        priority
      />
    </div>
  );
};

export default Logo;
