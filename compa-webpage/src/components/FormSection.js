export default function FormSection ({title, formContent = false}) {
    return (
    <div className="form">
        <p className="form-title">{title}</p>
        <div className="form-content">
            {formContent}
        </div>
    </div>
    );
}