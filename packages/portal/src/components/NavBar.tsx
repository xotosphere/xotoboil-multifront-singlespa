import React from "react";
import { navigateToUrl } from "single-spa";

export const NavBar: any = (): JSX.Element => (
	<nav>
		<ul>
			<li style={{ display: "inline" }}>
				<a href="/" onClick={navigateToUrl}>
					Home
				</a>
			</li>
			&nbsp;|&nbsp;
			<li style={{ display: "inline" }}>
				<a href="/angular" onClick={navigateToUrl}>
					Angular Application
				</a>
			</li>
			&nbsp;|&nbsp;
			<li style={{ display: "inline" }}>
				<a href="/react-vue" onClick={navigateToUrl}>
					React Vue Application
				</a>
			</li>
		</ul>
	</nav>
);
