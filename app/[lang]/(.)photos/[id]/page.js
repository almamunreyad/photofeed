import PhotoDetails from '@/components/PhotoDetails'
import Modal from '@/components/Modal'

const PhotoModal = async ({ params }) => {
    const { id, lang } = await params;

    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    )
}

export default PhotoModal