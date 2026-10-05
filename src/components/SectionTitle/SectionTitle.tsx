import "./SectionTitle.css";

type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

function SectionTitle({
    eyebrow,
    title,
    description,
}: SectionTitleProps) {
    return(
        <div className="section-title">
            <p className="section-title__eyebrow">{eyebrow}</p>
            <h2 className="section-title__heading">{title}</h2>
        
            {description && (
                <p className="section-title__description">{description}</p>
            )}
        </div>
    );
}

export default SectionTitle;