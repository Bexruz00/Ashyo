import { instance } from "@/hooks/instange"
import { useQuery } from "@tanstack/react-query"

const getBanners = () => {
  const {data = [], isLoading} = useQuery({
    queryKey:['banners-all'],
    queryFn:() => instance().get("/banners", { params:{ limit:1000 }}).then(res => res.data)
  })

  return {data, isLoading}
}

export default getBanners