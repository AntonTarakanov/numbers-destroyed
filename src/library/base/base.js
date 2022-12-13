/**
 * Общее для Data и Render.
 */
export class Base {

    /**
     * Проверка что переданы / определены необходимые поля.
     */
    checkRequiredFields() {
        if (!this.REQUIRED_FIELDS || this.REQUIRED_FIELDS?.length === 0) {
            return true;
        }

        this.REQUIRED_FIELDS.forEach(fieldName => {
            if (this[fieldName] === undefined) {
                console.log(this.ERROR_TEXT[fieldName.toUpperCase()]);
            }
        });
    }
}