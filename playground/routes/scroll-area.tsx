import { createFileRoute } from "@tanstack/react-router";

import { ScrollArea } from "@/index";

export const Route = createFileRoute("/scroll-area")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid h-[200px] grid-cols-3 gap-2">
      <ScrollArea className="w-full" vertical>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet.
        </p>
        <p>
          Consectetur adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam.
        </p>
      </ScrollArea>
      <ScrollArea className="w-full" horizontal>
        <div className="grid w-[800px] grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-20 w-full bg-pink-400" />
          ))}
        </div>
      </ScrollArea>

      <ScrollArea horizontal vertical>
        <div className="grid w-[800px] grid-cols-12 gap-2">
          {Array.from({ length: 500 }).map((_, index) => (
            <div key={index} className="h-20 w-full bg-pink-400" />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
