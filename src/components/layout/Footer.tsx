import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold">
            ARUL BUILDERS
          </h2>

          <p className="text-gray-400 mt-2">
            Building Chennai’s Future.
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;