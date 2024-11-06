import React,{useState, useEffect, useRef} from "react";
import styled,{keyframes} from "styled-components";

const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;


const ContentWrapper = styled.div`
    margin: 0 25px;
    padding: 0;
    @media screen and (min-width : 768px) {
        margin: 0 170px;
    }
`

const MainAnimdation = styled.div`
    animation: ${({ inView }) => inView ? slideDown : "none"} 1s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width : 768px) {
        flex-direction: row;
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 0.5px solid #8e8d8d;
    @media screen and (min-width : 768px) {
        flex-direction: row;
        align-items: center;
        border: none;
    }
`

const MainTitle = styled.p`
    font: 400 35px 'arial';
    color: #2b2b2b;
    margin: 0;
    padding: 0;
    margin: 60px 0 30px 0;
    @media screen and (min-width : 768px) {
        margin: 150px 0 150px 20px;
    }
`

const MainContent = styled.p`
    font: 500 13px 'arial';
    margin-bottom: 40px;
    @media screen and (min-width : 768px) {
        margin: 0;
        padding: 0;
        margin: 30px 20px 40px 70px;
    }
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width : 768px) {
        flex-direction: row;
        border-top: 0.5px solid #8e8d8d;
        & > div:nth-child(2){
            border-left: 0.5px solid #8e8d8d;
            border-right: 0.5px solid #8e8d8d;
        }
    }
`

const SubWrapper = styled.div`
    animation: ${({ inView }) => inView ? slideIn : "none"} 1s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    border-bottom: 0.5px solid #8e8d8d;
    @media screen and (min-width : 768px) {
        border: none;
    }
`

const SubTitle = styled.p`
    font: bold 22px 'arial';
    color: #2b2b2b;
    margin: 40px 0 60px 0;
    padding: 0;
    @media screen and (min-width : 768px) {
        margin: 30px 40px 60px 50px;
        padding: 0;
    }
`

const Content = styled.p`
    font: 500 13px 'arial';
    margin-bottom: 40px;
    @media screen and (min-width : 768px) {
        margin: 0;
        padding: 0;
        margin: 30px 40px 40px 50px;
    }
`

const Explain = () =>{
    const [inView, setInView] = useState({});
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView((prev) => ({ ...prev, [entry.target.dataset.index]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            if (refs.current) refs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return(
        <ContentWrapper>
            <MainContainer>
                <MainAnimdation ref={(el) => refs.current[0] = el} data-index={0} inView={inView[0]}>
                    <MainTitle>스마트한 도시의 스마트한 라이더를 위해.</MainTitle>
                    <MainContent>ebii가 도시 이동을 수월하게 해줍니다.<br></br><br></br>주변 세상에서 적극적인 참여자가 되거나 다음 목적지로 향해 보세요. 선택은 여러분의 몫입니다.</MainContent>
                </MainAnimdation>
            </MainContainer>
            <SubContainer>
                <SubWrapper ref={(el) => refs.current[1] = el} data-index={1} inView={inView[1]}>
                    <SubTitle>수월한<br></br>라이딩</SubTitle>
                    <Content>스마트 AI 기능으로 매일 라이딩이 수월해집니다. ebii가 라이더의 스타일과 선호도에 적응하여 라이더에게 최적화도니 여정을 제공합니다!</Content>
                </SubWrapper>
                <SubWrapper ref={(el) => refs.current[2] = el} data-index={2} inView={inView[2]}>
                    <SubTitle>매끈한<br></br>디자인</SubTitle>
                    <Content>단순함과 깔끔한 라인을 특징으로 하는 미니멀리즘 디자인으로 도시의 모든 거리를 스타일리시하게 이동하실 수 있습니다.</Content>
                </SubWrapper>
                <SubWrapper ref={(el) => refs.current[3] = el} data-index={3} inView={inView[3]}>
                    <SubTitle>걱정 없는<br></br>안전성</SubTitle>
                    <Content>지인들과 모이거나, 출근을 좀 늦게 하거나, 아니면 단순히 시간을 보내든, ebii가 라이더를 안전하고 건강하게 모십니다.</Content>
                </SubWrapper>
            </SubContainer>
        </ContentWrapper>
    );
};

export default Explain;