export default function Footer() {
    return (
        <footer className="text-center">
            <p className="mb-2">
                © {new Date().getFullYear()} Leandra Bodden — Designed with React + Bootstrap
            </p>

            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a
                    href="https://github.com/leandrabod04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <i className="bi bi-github"></i>GitHub
                </a>

                <a
                    href="mailto:Bodden.Leandra@gmail.com"
                    className="social-link"
                >
                    <i className="bi bi-envelope-fill"></i>Gmail
                </a>
            </div>
        </footer>
    );
}
