import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
			<div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
				<div className="flex items-center gap-2">
					<Image src="/images/svg/svg/menu.svg" width={20} height={20} className="lg:hidden " alt="" />
					<Link href="/">
						<Image src="/images/lws-logo-black.svg" height={120} width={120} alt="" />
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
				<Image
					src="/images/svg/avatar.svg"
					className="hidden lg:block "
					alt="login acount avatar"
					width={18}
					height={18}
				/>
				<Image
					src="/images/svg/shopping-Cart.svg"
					className="block"
					width={20}
					height={20}
					alt="shopping cart icon"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
