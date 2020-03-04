import * as React from 'react';
import { HelloWorld } from './components/HelloWorld';

export const App: React.FunctionComponent = () => {
	return <HelloWorld firstName="Emma" lastName="Parker" />;
};
