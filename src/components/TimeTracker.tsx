import { FunctionComponent, useCallback, useEffect, useRef } from "react";

interface ITimeTrackerProps {
  onSave: (duration: number) => void;
}

const TimeTracker: FunctionComponent<ITimeTrackerProps> = (props) => {
  const { onSave } = props;

  const durationRef = useRef<number>(0);

  const onComponentDidUnmount = useCallback(
    (duration: number) => onSave(duration),
    [onSave]
  );

  useEffect(() => {
    console.log("Component mounted");
    const interval = setInterval(() => {
      durationRef.current += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
      onComponentDidUnmount(durationRef.current);
    };
  }, [onComponentDidUnmount]);

  return <></>;
};

export default TimeTracker;
