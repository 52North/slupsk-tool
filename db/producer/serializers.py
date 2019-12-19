from wq.db.patterns import serializers as patterns
from .models import Producer, Delivery


class DeliverySerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Delivery
        exclude = ('producer',)
        object_field = 'producer'
        wq_config = {
            'initial': 1,
        }


class ProducerSerializer(patterns.AttachedModelSerializer):
    deliverys = DeliverySerializer(many=True, required=False)

    class Meta:
        model = Producer
        fields = "__all__"
