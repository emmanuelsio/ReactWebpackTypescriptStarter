import * as React from 'react';

export interface Props {
	firstName: string;
	lastName: string;
}

export const HelloWorld: React.FunctionComponent<Props> = (props: Props) => (
	<h1>
		Hola charolas from React! Welcome {props.firstName} and {props.lastName}!
	</h1>
);
