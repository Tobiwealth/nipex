import React from 'react'
import Card from './Card'

const CardSection = () => {
	const list = [
	    {id: 1, title: "TASK MANAGEMENT", src:"task-01"},
	    {id: 2, title: "BUDGET MANAGEMENT", src:"pie-chart-02"},
	    {id: 3, title: "CUSTOMER RELATIONSHIP MANAGEMENT", src:"user-settings-02"},
	    {id: 4, title: "INVOICE AND PAYMENT MANAGEMENT", src:"invoice-04"},
	    {id: 5, title: "VENDOR AND CONTRACT MANAGEMENT", src:"license-draft"},
	    {id: 6, title: "HUMAN CAPITAL  MANAGEMENT", src:"user-group"},
	    {id: 7, title: "DOCUMENT MANAGEMENT", src:"folder-library"},
	    {id: 8, title: "DATA ANALYTICS AND REPORTING", src:"Frame"},
	    {id: 9, title: "USER AND SYSTEM ADMINISTRATION", src:"dashboard-square-setting"},
	]
	return (
		<div className="flex flex-wrap justify-center gap-12 px-8 md:px-12 py-16 bg-[#F1F3F2] bg-[url('/images/cardbackground.svg')] bg-no-repeat bg-cover bg-center">
			{
				list.map((item) => (
					<Card key={item.id} title={item.title} src={item.src}/>
				))
			}
		</div>
	)
}

export default CardSection