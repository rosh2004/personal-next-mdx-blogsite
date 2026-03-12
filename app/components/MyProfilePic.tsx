import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="flex justify-center mt-12 animate-fade-up">
      <Image
        className='rounded-full border-8 border-primary mb-4 mt-6 md:my-0 '
        src="/images/roshaan-portrait.jpg"
        width={300}
        height={300}
        alt="Roshaan Siddiqui"
        priority={true}
      />
    </section>
  );
}

