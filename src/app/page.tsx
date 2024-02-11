import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <header className=" h-2/3 w-11/12 flex flex-row items-center pt-5">
        <section className="flex items-center flex-col w-full ">
          <h1 className="text-4xl font-boombox  text-center  p-8 max-w-full">
            Xavi Fernandez
          </h1>
          <h3 className="text-2xl font-boombox p-5 w-fit">Digital Portfolio</h3>
          <p className="font-russoOne p-3 w-fit">
            En este lugar podrás encontrar mis proyectos de desarrollo web y de
            software.
          </p>
          <p className="font-russoOne p-3 w-fit">
            También todo lo relacionado con mi producción literaria y artística.
          </p>
        </section>
      </header>

      <section className=" w-11/12 h-80 pt-2  overflow-hidden">
        <a className="" href="">
          <img className="w-full" src="/assets/codegif.gif" alt="code" />
        </a>
      </section>
    </main>
  );
}
