import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="flex justify-center mt-12 animate-fade-up">
      <Image
        className="profile-img"
        src="/images/roshaan-portrait.jpg"
        width={150}
        height={150}
        alt="Roshaan Siddiqui"
        priority={true}
        style={{ width: 150, height: 150, objectFit: "cover" }}
      />
    </section>
  );
}
