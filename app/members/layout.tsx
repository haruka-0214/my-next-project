import Sheet from "@/app/_components/sheet";
import Hero from "@/app/_components/Hero";

type Props={
    children:React.ReactNode;
};

export default function Rootlayout({children}:Props){
    return (
        <>
            <Hero title="Members" sub="メンバー" />
            <Sheet>{children}</Sheet>;
        </>
    );
}