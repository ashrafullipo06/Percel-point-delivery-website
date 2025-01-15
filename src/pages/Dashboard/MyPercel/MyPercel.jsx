import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";

const MyPercel = () => {
  const axiosPublic = useAxiosPublic();
  const { isUser } = useUser();
  console.log(isUser);

  const { data: percels = [] } = useQuery({
    queryKey: ["percel"],
    enabled: !!isUser?._id,
    queryFn: async () => {
      const res = await axiosPublic(`/percels/${isUser?._id}`);
      return res.data;
    },
  });

  console.log(percels);
  return <div></div>;
};

export default MyPercel;
