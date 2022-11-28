import ContentLoader from "react-content-loader"

const SkeletonSlider = () => {
    return (
    <ContentLoader 
        speed={2}
        width={150}
        height={242}
        viewBox="0 0 150 242"
        backgroundColor="#271819"
        foregroundColor="#341819"
        >
        <rect x="0" y="0" rx="6" ry="6" width="150" height="242" />
    </ContentLoader>
    );
};

export default SkeletonSlider;