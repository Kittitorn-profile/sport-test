import "styled-components";

declare module "styled-components" {
	export interface StyleProps {
		theme?: any;
		[key: string]: any;
	}
}
