import React from 'react'

import styles from './hero.module.css'

export default ({ data }) => {
	return (
		<div className={styles.heroImage} style={{
			backgroundImage: 'url("//images.ctfassets.net/ekyj8y78yjj2/6FlxiT5GlTAk6vYT5S4VNq/f9b772f6238b1a2a1320a5be85b28073/IMG_8304.JPG")'
		}}>
			<div className={styles.heroInner}>

				<div className={styles.logo}>
					<object data={data.logo.file.url} type="image/svg+xml" aria-label="Logo"></object>
				</div>

				<div className={styles.video}>
					{/* <h1>{data.name}</h1> */}

					<iframe title="Mural Wish: Funding Video" width="720" height="405" src="https://www.youtube-nocookie.com/embed/y3JdzYdo-TI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>

				<a className={styles.donate} href={data.donateLink}>
					<svg width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1850 1850"><path d="M933.966 1471.424q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5q-38-47.5-68-97.5t-53.5-121q-23.5-71-23.5-138 0-220 127-344t351-124q62 0 126.5 21.5t120 58q55.5 36.5 95.5 68.5t76 68q36-36 76-68t95.5-68.5q55.5-36.5 120-58t126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18" fill="#fff" /></svg>
					<div>Donate</div>
				</a>

				{/* <pre style={{width: '100%'}}>
					<code>
						{JSON.stringify(data, null, 2)}
					</code>
				</pre> */}


				{/* <Img
					className={styles.heroImage}
					alt={data.name}
					fluid={data.heroImage.fluid}
				/>
				<div className={styles.heroDetails}>
					<h3 className={styles.heroHeadline}>{data.name}</h3>
					<p className={styles.heroTitle}>{data.title}</p>
					<p>{data.shortBio.shortBio}</p>
				</div> */}

			</div>

		</div>
	)
}
