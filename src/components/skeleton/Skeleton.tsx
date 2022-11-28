import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    speed={2}
    width={207}
    height={348}
    viewBox="0 0 207 348"
    backgroundColor="#271819"
    foregroundColor="#341819"
    >
    <rect x="5" y="5" rx="5" ry="5" width="207" height="348" />
    </ContentLoader>
)

export default Skeleton