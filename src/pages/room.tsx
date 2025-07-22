import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.id) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <>
      <div>
        <h1>{JSON.stringify(params)}</h1>
      </div>
    </>
  );
}
