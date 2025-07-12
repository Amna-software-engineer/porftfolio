
const OverlayText = (props) => {
  // let classes = `absolut top-${top.letf} left-{props.left} font-size-[6rem] w-[100%] text-para1 opacity-[0.1] transform-translate[-28%,-20%] z-0`+props.className;
  const style ={
    position: "absolute", top: props.top,left: props.left, fontSize: "6rem",width:"100%", fontWeight: "bold", color: "var(--para1)",opacity: "0.1", transform: "translate(-28%, -20%)",zIndex:"0",
  }
  //  classes = style + props.className;
  return (
    <div style={style} className="hidden lg:block">
        {props.content}
    </div>
  )
}

export default OverlayText;