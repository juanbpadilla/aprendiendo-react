import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
	const { filters, setFilters } = useFilters()
	
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (event) => {
		setFilters(prevState => ({
			...prevState,
			minPrice: event.target.value
		}))
	}

	const handeChangeCategory = (event) => {
		setFilters(prevState => ({
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
					value={filters.minPrice}
				/>
				<span>${filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select id={categoryFilterId} onChange={handeChangeCategory}>
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
					<option value="fragrances">Fragancias</option>
				</select>
			</div>

		</section>
	)
}