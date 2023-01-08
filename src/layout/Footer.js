export default function Footer() {
	return (
		<footer className='page-footer my-footer'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						More Movies
					</a>
				</div>
			</div>
		</footer>
	)
}
