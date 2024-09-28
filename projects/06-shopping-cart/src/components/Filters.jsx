import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
	const [minPrice, setMinPrice] = useState(0)
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (event) => {
		// aquí algo HUELE mal 🤔
		// DOS FUENTES DE LA VERDAD
		setMinPrice(event.target.value)
		onChange(prevState => ({
			...prevState,
			minPrice: event.target.value
		}))
	}

	const handeChangeCategory = (event) => {
		// ⬇️ ESTO HUELE MAL
		// estamos pasando la función actualizar estado
		// nativa de React a un componente hijo
		onChange(prevState => ({
			...prevState,
			category: event.target.value
		}))
	}

	return (
		<section className="filters">

			<div>
				<label htmlFor={minPriceFilterId}>Precio mínimo:</label>
				<input
					type='range'
					id={minPriceFilterId}
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select id={categoryFilterId} onChange={handeChangeCategory}>
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
					<option value="fragrances">Francias</option>
				</select>
			</div>

		</section>
	)
}