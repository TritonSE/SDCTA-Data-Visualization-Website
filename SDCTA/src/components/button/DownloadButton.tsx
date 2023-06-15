import downloadIcon from "./downloadIcon.svg";

interface DownloadButtonProps {
    onDownload?: (e: {
        preventDefault: () => void;
    }) => void

}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload }: DownloadButtonProps) => {
    return (
        <button className="download-button" onClick={onDownload}>
            Download <img src={downloadIcon} alt="download icon" />
        </button>
    );
};

