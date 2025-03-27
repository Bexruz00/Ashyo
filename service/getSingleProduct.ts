import { instance } from "@/hooks/instange"
import { useQuery } from "@tanstack/react-query"

const getSingleProduct = (id:string | any) => {
  const {data = {}, isLoading} = useQuery({
    queryKey:['single_product', id],
    queryFn:() => instance().get(`/product-items/${id}`).then(res => res.data)
  })

  return {data, isLoading}
}

export default getSingleProduct