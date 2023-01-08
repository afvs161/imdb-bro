export default function Header() {
	return (
		<nav>
			<div className='nav-wrapper my-nav__header'>
				<a href='#' className='brand-logo'>
					IMDb bro
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='#'>Movie</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
