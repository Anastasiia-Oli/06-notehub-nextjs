import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetails from "./NoteDetails.client";

type NoteDetailsProps = {
  params: { id: string };
};

const NoteDetailsPage = async ({ params }: NoteDetailsProps) => {
  const queryClient = new QueryClient();
  const id = Number(params.id);

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return <NoteDetails dehydratedState={dehydrate(queryClient)} />;
};

export default NoteDetailsPage;
