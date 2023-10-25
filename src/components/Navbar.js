import NavbarCSS from "./Navbar.module.css";

function Header() {
	return (
		<navbar className={NavbarCSS.mainContainer}>
			<div className={NavbarCSS.itemsContainer}>
				<i className={` ${NavbarCSS.bars} fa-solid fa-bars`}></i>
				<h3 className={NavbarCSS.logo}>Laudry Atelier</h3>
				<ul>
					<li ><i class="fa-solid fa-magnifying-glass"></i></li>
					<li><i class="fa-regular fa-heart"></i></li>
					<li><i class="fa-solid fa-bag-shopping"></i></li>
				</ul>
			</div>
		</navbar>
	);
}

export default Header;
