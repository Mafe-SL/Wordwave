
import mongoose from "mongoose";

//Se tiene que definir la estructura de tipos del modelo para evitar los errores de tipo, typescript es una perra, lo siento
export interface ICourse {
  _id: mongoose.Types.ObjectId;
  title: string;
  imageSrc: string;
}

const courseSchema = new mongoose.Schema<ICourse>({
  title: String,
  imageSrc: String,
});


// Aqui le pasas la interfaz de tipos que le definiste al modelo
export default mongoose.models.Courses || mongoose.model<ICourse>('Courses', courseSchema);
