import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "../_components/_Pagination";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page(){
    const{contents:news,totalCount}=await getNewsList({
        limit:NEWS_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news}/>
            <Pagination totalCount={totalCount}/>
        </>
    );
}
    