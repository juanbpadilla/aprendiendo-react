import './Filters.css'

export function Filters() {
	return (
		<section className="filters">

			<div>
				<label htmlFor="category">Precio</label>
				<input
					type='range'
					id="price"
					min='0'
					max='1500'
				/>
			</div>

			<div>
				<label htmlFor="category">Categoría</label>
				<select id="category">
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
					<option value="fragrances">Francias</option>
				</select>
			</div>

		</section>
	)
}