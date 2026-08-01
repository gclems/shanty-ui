/** biome-ignore-all lint/suspicious/noArrayIndexKey: No need for this rule here */
import { createFileRoute } from "@tanstack/react-router";
import { UserIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { cn } from "tailwind-variants";

import { Button } from "@/index";

export const Route = createFileRoute("/button")({
	component: Page,
});

const variants = ["contained", "outlined", "light", "ghost"] as const;
const colors = [
	"primary",
	"secondary",
	"neutral",
	"info",
	"success",
	"warning",
	"destructive",
] as const;
const sizes = ["sm", "md", "lg"] as const;

function Page() {
	return (
		<table className="[&_td,&_th]:px-2 [&_td,&_th]:py-1">
			<thead>
				<tr>
					<th>Color</th>
					<th>Size</th>
					{variants.map((variant) => (
						<th key={variant}>{variant}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{colors.map((color, colorIndex) => (
					<Fragment key={color}>
						{sizes.map((size, sizeIndex) => (
							<Fragment key={size}>
								<tr
									key={`${colorIndex}-${sizeIndex}`}
									className={cn({
										"border-b": (sizeIndex + 1) % 3 === 0,
									})}
								>
									{sizeIndex === 0 && <td rowSpan={3}>{color}</td>}
									<td>{size}</td>
									{variants.map((variant) => (
										<td key={variant} className="space-y-1">
											{[false, true].map((disabled, disabledIndex) => (
												<div
													key={`${colorIndex}-${sizeIndex}-${disabledIndex}`}
													className="space-x-2"
												>
													<Button
														variant={variant}
														color={color}
														size={size}
														disabled={disabled}
													>
														<UserIcon /> Button
													</Button>

													<Button
														variant={variant}
														color={color}
														size={size}
														square
														disabled={disabled}
													>
														<UserIcon />
													</Button>
												</div>
											))}
										</td>
									))}
								</tr>
							</Fragment>
						))}
					</Fragment>
				))}
			</tbody>
		</table>
	);
}
