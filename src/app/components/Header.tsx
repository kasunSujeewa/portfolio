import NavLinks from "./NavLinks";

function Header() {
    return (
        <div className="grid grid-cols-2 min-h-12 content-center p-5">
            <div className="grid sm:text-4xl">
                Kasun Ranasinghe
            </div>
            <div className="grid grid-cols-3 gap-4 text-right">
                <NavLinks />
            </div>
        </div>
    );
}

export default Header;