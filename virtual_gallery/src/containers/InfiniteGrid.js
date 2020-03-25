import * as React from 'react';
import { GridLayout } from '@egjs/react-infinitegrid';
import getItems from '../components/GetItems';
import Item from '../components/Item';

export default function App() {
	const [ items, setItems ] = React.useState(getItems(0, 0, 10));

	return (
		<div className="app">
			<h1 className="header">
				<a href="https://github.com/naver/egjs-infinitegrid" target="_blank">
					Virtual Scroll - GridLayout
				</a>
			</h1>

			<GridLayout
				className="gridlayout container"
				groupBy={(item) => item.props['data-groupkey']}
				options={{
					isOverflowScroll: false,
					useFit: true,
					useRecycle: true,
					horizontal: false
				}}
				layoutOptions={{
					margin: 15,
					align: 'center'
				}}
				onAppend={(e) => {
					const nextGroupKey = (+e.groupKey || 0) + 1;
					const nextKey = items.length;

					setItems([ ...items, ...getItems(nextGroupKey, nextKey, 10) ]);
				}}
			>
				{items.map((item) => <Item data-groupkey={item.groupKey} key={item.key} num={item.key} />)}
			</GridLayout>
		</div>
	);
}
