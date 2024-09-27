import { useState } from "react"

// export function TwitterFollowCard({ userName, name, isFollowing }) {
export function TwitterFollowCard({ userName = 'none', children, initialIsFollowing }) {
	// const state = useState(false)
	// const isFollowing = state[0]
	// const setIsFollowing = state[1]
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //es lo mismo q las 3 lineas de arriba

	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing
		?	'tw-followCard-button is-following'
		:	'tw-followCard-button'

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}

	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={`https://unavatar.io/x/${userName}`}
					alt="El avatar de kikobeats" />
				<div className='tw-followCard-info'>
					<strong>{children}</strong>
					<span className='tw-followCard-infoUserName'>@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick} >
					<span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}