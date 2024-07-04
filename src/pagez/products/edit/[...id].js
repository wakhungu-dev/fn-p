import axios from "axios";

export default function EditProduct(){
    const router = useRouter()
    const {_id} = router.query
    const [productInfo, setProductInfo] = useState(null)
    useEffect(() => {
        if(!_id) { return;
        } else{
            axios.get(`/api/products?id=` + id).then((res) => {
                setProductInfo(res.data)
            })
        }
    }, [_id])
    return <>
    <div className="py-3">
      <div className="text-center sm:text-left">
        <p className="mt-1.5 text-md text-gray-500 max-w-lg">
            Editing {productInfo?.title}

        </p>
      </div>

      <hr className="h-px border-0 bg-gray-300 my-4" />
      
      <div className="my-10">
       {
        productInfo && (
            <Product {...productInfo}/>

        )
       }
      </div>
    </div>
    </>
}