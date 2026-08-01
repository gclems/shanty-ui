/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { createFileRoute } from "@tanstack/react-router";

import { Dialog } from "@/components/dialogs/dialog/dialog";
import { AlertDialog, Button, Drawer, Select } from "@/index";

export const Route = createFileRoute("/dialogs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-4">
			<div className="text-xl font-semibold">Alert</div>
			<table>
				<thead>
					<tr>
						<th>Size</th>
						<th>Normal</th>
					</tr>
				</thead>
				<tbody>
					{(["sm", "md", "lg", "xl"] as const).map((size) => (
						<tr key={size}>
							<td>{size}</td>
							<td>
								<AlertDialog>
									<AlertDialog.Trigger>Open {size}</AlertDialog.Trigger>
									<AlertDialog.Popup size={size}>
										<AlertDialog.Title>AlertDialog title</AlertDialog.Title>
										<AlertDialog.Body>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
												ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat.
											</p>
										</AlertDialog.Body>
										<AlertDialog.Footer>
											<AlertDialog.CloseButton>Cancel</AlertDialog.CloseButton>
											<AlertDialog.CloseButton render={<Button color="primary" />}>
												Confirm
											</AlertDialog.CloseButton>
										</AlertDialog.Footer>
									</AlertDialog.Popup>
								</AlertDialog>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="text-xl font-semibold">Dialog</div>
			<table>
				<thead>
					<tr>
						<th>Size</th>
						<th>Normal</th>
						<th>Loooong</th>
					</tr>
				</thead>
				<tbody>
					{(["sm", "md", "lg", "xl"] as const).map((size) => (
						<tr key={size}>
							<td>{size}</td>
							<td>
								<Dialog>
									<Dialog.Trigger>Open {size}</Dialog.Trigger>
									<Dialog.Popup size={size}>
										<Dialog.Header
											title="Dialog title"
											description="This is the dialog description"
										/>
										<Dialog.Body>
											<Select
												items={Array.from({ length: 100 }).map((_, index) => ({
													value: `option-${index}`,
													label: `Option ${index}`,
												}))}
												placeholder="Select an option"
											/>
											<Select
												items={Array.from({ length: 13 }).map((_, index) => ({
													value: `option-${index}`,
													label: `Option ${index}`,
												}))}
												placeholder="Select an option"
											/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
												ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat.
											</p>
										</Dialog.Body>
										<Dialog.Footer>
											<Dialog.CloseButton>Cancel</Dialog.CloseButton>
											<Dialog.CloseButton render={<Button color="primary" />}>
												Confirm
											</Dialog.CloseButton>
										</Dialog.Footer>
									</Dialog.Popup>
								</Dialog>
							</td>
							<td>
								<Dialog>
									<Dialog.Trigger>Open {size}</Dialog.Trigger>
									<Dialog.Popup size={size}>
										<Dialog.Header
											title="Dialog title"
											description="This is the dialog description"
										/>
										<Dialog.Body>
											{Array.from({ length: 40 }).map((_, index) => (
												<p key={index}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
													eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
													ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
													aliquip ex ea commodo consequat.
												</p>
											))}
										</Dialog.Body>
										<Dialog.Footer>
											<Dialog.CloseButton>Cancel</Dialog.CloseButton>
											<Dialog.CloseButton render={<Button color="primary" />}>
												Confirm
											</Dialog.CloseButton>
										</Dialog.Footer>
									</Dialog.Popup>
								</Dialog>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="text-xl font-semibold">Drawer</div>
			<table>
				<thead>
					<tr>
						<th>Size</th>
						<th>Normal (left side)</th>
						<th>Loooong (right side)</th>
					</tr>
				</thead>
				<tbody>
					{(["sm", "md", "lg", "xl"] as const).map((size) => (
						<tr key={size}>
							<td>{size}</td>
							<td>
								<Drawer>
									<Drawer.Trigger>Open {size}</Drawer.Trigger>
									<Drawer.Popup size={size} side="left">
										<Drawer.Header
											title="Drawer title"
											description="This is the dialog description"
										/>
										<Drawer.Body>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
												ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
												aliquip ex ea commodo consequat.
											</p>
										</Drawer.Body>
										<Drawer.Footer>
											<Drawer.CloseButton>Cancel</Drawer.CloseButton>
											<Drawer.CloseButton render={<Button color="primary" />}>
												Confirm
											</Drawer.CloseButton>
										</Drawer.Footer>
									</Drawer.Popup>
								</Drawer>
							</td>
							<td>
								<Drawer>
									<Drawer.Trigger>Open {size}</Drawer.Trigger>
									<Drawer.Popup size={size}>
										<Drawer.Header
											title="Drawer title"
											description="This is the dialog description"
										/>
										<Drawer.Body>
											{Array.from({ length: 40 }).map((_, index) => (
												<p key={index}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
													eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
													ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
													aliquip ex ea commodo consequat.
												</p>
											))}
										</Drawer.Body>
										<Drawer.Footer>
											<Drawer.CloseButton>Cancel</Drawer.CloseButton>
											<Drawer.CloseButton render={<Button color="primary" />}>
												Confirm
											</Drawer.CloseButton>
										</Drawer.Footer>
									</Drawer.Popup>
								</Drawer>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
